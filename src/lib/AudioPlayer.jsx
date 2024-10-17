import { Box } from '@mantine/core'

export default function AudioPlayer({ src }) {
  return <Box src={src} className='mx-auto w-[75%]' controls component='audio'></Box>
}
