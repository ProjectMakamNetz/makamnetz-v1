import { Card, Flex, Text } from '@mantine/core'

export default function SonucSection({ selectedMakam }) {
  return (
    <Card w={'100%'} maw={{ lg: 250 }} radius={'md'} className=' bg-gradient-to-r from-red-100 to-red-300'>
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
          className='rounded-md bg-gradient-to-b from-red-200 to-red-600'
        >
          Karar
        </Text>
        <Flex wrap={'wrap'} justify={'center'} gap={12}>
          {Array(4)
            .fill()
            .map((_, i) => {
              const root = selectedMakam?.journey.end[`root${i + 1}`]
              const pow = selectedMakam?.journey.end[`pow${i + 1}`]
              return root ? (
                <Flex
                  key={i}
                  className='aspect-square h-36 items-center justify-center rounded-full bg-gradient-to-b from-red-300 to-red-700 p-2 shadow-2xl duration-300 hover:scale-105'
                >
                  <Text key={i} className='text-xl text-white '>
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
