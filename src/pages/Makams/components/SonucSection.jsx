import { Flex, Stack, Text } from '@mantine/core'

export default function SonucSection({ selectedMakam }) {
  return (
    <Stack className='h-[34rem] justify-around space-y-6 rounded-md bg-gradient-to-r from-red-100 to-red-300 px-4 py-4 text-center lg:w-3/12 lg:py-12 xl:px-8'>
      <Text className='rounded-md bg-gradient-to-b from-red-200 to-red-600 px-10 py-2 text-xl font-bold text-white shadow-xl'>
        Karar
      </Text>
      <Flex className='aspect-square items-center justify-center gap-4 rounded-full bg-gradient-to-b from-red-200 to-red-600 px-4  shadow-xl '>
        {Array(4)
          .fill()
          .map((_, i) => {
            const root = selectedMakam?.journey.end[`root${i + 1}`]
            const pow = selectedMakam?.journey.end[`pow${i + 1}`]
            return root ? (
              <Text key={i} className=' text-xl text-white '>
                {root}
                <Text component='sup' fz='xs' fs='italic'>
                  {pow}
                </Text>
              </Text>
            ) : null
          })}
      </Flex>
    </Stack>
  )
}
