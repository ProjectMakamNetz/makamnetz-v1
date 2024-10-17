import { Flex, Card, Text } from '@mantine/core'

export default function GirisSection({ selectedMakam }) {
  return (
    <Card w={'100%'} maw={{ lg: 250 }} radius={'md'} className=' bg-gradient-to-r from-blue-100 to-blue-300'>
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
          className='rounded-md bg-gradient-to-b from-blue-400 to-blue-600'
        >
          Başlangıç
        </Text>
        <Flex wrap={'wrap'} gap={12} justify={'center'}>
          {Array(4)
            .fill()
            .map((_, i) => {
              const root = selectedMakam?.journey.begin[`root${i + 1}`]
              const pow = selectedMakam?.journey.begin[`pow${i + 1}`]
              return root ? (
                <Flex
                  key={i}
                  className='aspect-square h-36 items-center justify-center gap-6 rounded-full bg-gradient-to-b from-blue-400 to-blue-600 shadow-2xl duration-300 hover:scale-105'
                >
                  <Text className='text-lg text-white'>
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
