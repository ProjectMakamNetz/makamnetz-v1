import { Card, Flex, Text } from '@mantine/core'

export default function SeyirSection({ selectedMakam }) {
  return (
    <Card w={'100%'} miw={{ lg: 350 }} radius={'md'} className=' bg-gradient-to-r from-yellow-100 to-yellow-300'>
      <Flex
        gap={{
          base: 20,
          lg: 80,
        }}
        direction={'column'}
        h={{ base: 'initial', lg: '500' }}
      >
        <Text
          ff={'Inder'}
          ta={'center'}
          size='xl'
          fw={'bold'}
          py={8}
          c={'white'}
          className='rounded-md bg-gradient-to-b from-yellow-400 to-yellow-700'
        >
          Seyir
        </Text>
        <Flex wrap={'wrap'} justify={'center'} gap={12}>
          {Array(6)
            .fill()
            .map((_, i) => {
              const root = selectedMakam?.journey.middle[`root${i + 1}`]
              const pow = selectedMakam?.journey.middle[`pow${i + 1}`]
              return root ? (
                <Flex
                  key={i}
                  className='aspect-square h-36 items-center justify-center rounded-full bg-gradient-to-b from-yellow-400 to-yellow-700 p-2 shadow-2xl duration-300 hover:scale-105'
                >
                  <Text className='text-lg text-white '>
                    {root}
                    <Text component='sup' fz='xs' fs='italic'>
                      {pow}
                    </Text>
                  </Text>
                </Flex>
              ) : null
            })}
        </Flex>
      </Flex>
    </Card>
  )
}
