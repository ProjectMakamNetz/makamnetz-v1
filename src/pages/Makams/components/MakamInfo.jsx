import { Box, Divider, Stack, Text, Title } from '@mantine/core'
import AudioPlayer from '../../../lib/AudioPlayer'

export default function MakamInfo({ selectedMakam }) {
  return (
    <Box>
      <Stack className='rounded-md' bg='dark.6' p='xs'>
        <Title className='text-yellow-400' align='center' order={1} fz='28px'>
          {selectedMakam ? selectedMakam.name : 'Makam Adi'}
        </Title>
        <Text className='xl:text-md leading-6 text-white '>
          {selectedMakam ? selectedMakam.desc : 'Select a makam to see the description.'}
        </Text>
        <Divider />
        <AudioPlayer
          src={selectedMakam ? selectedMakam.audio : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'}
        />
      </Stack>
    </Box>
  )
}
