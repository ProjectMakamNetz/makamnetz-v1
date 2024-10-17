import { Flex } from '@mantine/core'
import GirisSection from './GirisSection'
import SeyirSection from './SeyirSection'
import SonucSection from './SonucSection'
import { ArrowRight } from '../../../components/ui/icons'

export default function MakamSeyir({ selectedMakam }) {
  return (
    <Flex className='py-2 lg:my-8'>
      <Flex
        gap={28}
        direction={{ base: 'column', lg: 'row' }}
        className='relative'
        wrap={{ base: 'wrap', lg: 'nowrap' }}
      >
        <GirisSection selectedMakam={selectedMakam} />
        <SeyirSection selectedMakam={selectedMakam} />
        <SonucSection selectedMakam={selectedMakam} />
        {/* <ArrowRight className='left-[24%] top-[20%] hidden lg:block' />
        <ArrowRight className='left-[67%] top-[20%] hidden lg:block' /> */}
      </Flex>
    </Flex>
  )
}
