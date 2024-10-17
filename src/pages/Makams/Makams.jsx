import { Box, Divider, Flex, Combobox, useCombobox, TextInput } from '@mantine/core'
import { useState } from 'react'
import MakamInfo from './components/MakamInfo'
import MakamSeyir from './components/MakamSeyir'
import { makams } from '../../constants/makams'
import MakamsModal from './components/MakamsModal'

export default function Makams() {
  const combobox = useCombobox()
  const [value, setValue] = useState('')
  const [selectedMakam, setSelectedMakam] = useState(makams[0])
  const shouldFilterOptions = !makams.some((item) => item.name === value)
  const filteredOptions = shouldFilterOptions
    ? makams.filter((item) => item.name.toLowerCase().includes(value.toLowerCase().trim()))
    : makams

  const sortFilteredOptions = filteredOptions.sort((a, b) => a.name.localeCompare(b.name, 'tr'))

  const options = sortFilteredOptions.map((item) => (
    <Combobox.Option value={item.name} key={item.slug} active={item.name === value}>
      {item.name}
    </Combobox.Option>
  ))

  return (
    <Box component='section' id='makams' m='sm' className='mx-auto'>
      <Flex direction={{ base: 'column', md: 'row' }} align={{ base: 'center', md: 'flex-start' }} gap={20}>
        <Flex maw={{ md: 375 }} gap={10} direction={'column'} p='sm'>
          <Box>
            <Combobox
              classNames={{
                options: 'text-white bg-slate-600 rounded-md',
                option: 'hover:bg-slate-500 duration-500 tracking-wide hover:text-yellow-400 ',
              }}
              onOptionSubmit={(optionValue) => {
                setValue(optionValue)
                setSelectedMakam(makams.find((makam) => makam.name === optionValue))
                combobox.closeDropdown()
              }}
              store={combobox}
            >
              <Combobox.Target>
                <TextInput
                  classNames={{
                    description: 'text-white italic',
                    input: 'text-white',
                  }}
                  size='md'
                  variant='filled'
                  radius='md'
                  description='Bir makam seçin veya yazın'
                  placeholder='Makam adı'
                  value={value}
                  onChange={(event) => {
                    setValue(event.currentTarget.value)
                    combobox.openDropdown()
                    combobox.updateSelectedOptionIndex()
                  }}
                  onClick={() => combobox.openDropdown()}
                  onFocus={() => combobox.openDropdown()}
                  onBlur={() => combobox.closeDropdown()}
                />
              </Combobox.Target>

              <Combobox.Dropdown>
                <Combobox.Options mah={700} style={{ overflowY: 'auto' }}>
                  {options.length === 0 ? (
                    <Combobox.Empty className='italic text-zinc-300'>Makam bulunamadı</Combobox.Empty>
                  ) : (
                    options
                  )}
                </Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>
          </Box>
          <Divider />
          <MakamInfo selectedMakam={selectedMakam} />
        </Flex>
        <MakamSeyir selectedMakam={selectedMakam} />
      </Flex>
      <MakamsModal />
    </Box>
  )
}
