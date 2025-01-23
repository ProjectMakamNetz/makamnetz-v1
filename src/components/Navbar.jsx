import { Anchor, Box, Divider, Drawer, Flex, Group, Image } from '@mantine/core'
import { IconBrandYoutubeFilled, IconBrandGithub, IconLanguage } from '@tabler/icons-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDisclosure } from '@mantine/hooks'
import { Burger } from '@mantine/core'

const links = [
  // uncomment when hardcoding is removed
  // { name: 'ÇEŞNİ EVRENİ', href: '/cesni-world' },
  { name: 'Makamlar', href: '/makams' },
  { name: 'Makam Ağı', href: 'https://makam-netzfrontend.vercel.app/makam_network' },
]

export default function Navbar() {
  const [opened, { open, close }] = useDisclosure()
  return (
    <Box py='xl' component='header'>
      <Flex component='nav' justify={'space-between'} align={'center'} gap={20}>
        <Anchor component={Link} to='/' underline='never'>
          {/* <Image w={200} src='/logo.png' /> */}
          <h1 className='home-text-shadow text-center  font-baskerville text-5xl text-white'>
            Makam<span className='tracking-wide text-yellow-500'>Netz</span>
          </h1>
        </Anchor>

        {!opened && (
          <>
            <Flex gap={{ base: 40, lg: 80 }} visibleFrom='sm'>
              {/* hardcoding start */}
              <Anchor
                ff={'Inder'}
                underline='never'
                href='https://makam-netzfrontend.vercel.app/'
                target='_blank'
                classNames={{
                  root: 'text-gray-100 hover:text-yellow-400 duration-300 text-lg font-semibold uppercase',
                }}
              >
                ÇEŞNİ EVRENİ
              </Anchor>
              {/* hardcoding end */}
              {links.map((link) => (
                <Anchor
                  ff={'Inder'}
                  component={Link}
                  classNames={{
                    root: 'text-gray-100 hover:text-yellow-400 duration-300 text-lg font-semibold uppercase',
                  }}
                  underline='never'
                  key={link.name}
                  to={link.href}
                >
                  {link.name}
                </Anchor>
              ))}
              <Link
                className='font-inder text-lg font-semibold uppercase text-gray-100 duration-300 hover:text-yellow-400'
                to='/info'
              >
                BİLGİ
              </Link>
            </Flex>
            <Flex gap={16} visibleFrom='sm'>
              <Anchor
                className=' text-gray-400 duration-300 hover:text-yellow-400'
                target='_blank'
                href='https://www.youtube.com/@MakamNetz'
              >
                <IconBrandYoutubeFilled size={25} />
              </Anchor>
              <Anchor
                className=' text-gray-400 duration-300 hover:text-yellow-400'
                target='_blank'
                href='https://github.com/ProjectMakamNetz'
              >
                <IconBrandGithub size={25} />
              </Anchor>
              {/* <Anchor
                className='text-gray-400 duration-300 hover:text-yellow-400'
                target='_blank'
                href='https://youtube.com'
              >
                <IconLanguage size={25} />
              </Anchor> */}
            </Flex>
          </>
        )}
        {/* mobile menu */}
        <Drawer opened={opened} position='right' onClose={close}>
          <Flex direction={'column'} gap={50}>
            <Flex gap={20} direction={'column'} align={'center'} mt={50}>
              {/* hardcoding start */}
              <Anchor
                ff={'Inder'}
                underline='never'
                href='https://makam-netzfrontend.vercel.app/'
                target='_blank'
                classNames={{
                  root: 'text-gray-100 hover:text-yellow-400 duration-300 text-lg font-semibold uppercase',
                }}
                onClick={close}
              >
                ÇEŞNİ EVRENİ
              </Anchor>
              {/* hardcoding end */}
              {links.map((link) => (
                <Anchor
                  ff={'Inder'}
                  component={Link}
                  classNames={{
                    root: 'text-gray-100 hover:text-yellow-400 duration-300 text-lg font-semibold uppercase',
                  }}
                  underline='never'
                  key={link.name}
                  to={link.href}
                  onClick={close}
                >
                  {link.name}
                </Anchor>
              ))}
              <Link
                onClick={close}
                className='font-inder text-lg font-semibold uppercase text-gray-100 duration-300 hover:text-yellow-400'
                to='/info'
              >
                BİLGİ
              </Link>
            </Flex>
            <Flex gap={16} justify={'space-evenly'}>
              <Anchor
                className=' text-gray-400 duration-300 hover:text-yellow-400'
                target='_blank'
                href='https://www.youtube.com/@MakamNetz'
                onClick={close}
              >
                <span>YouTube</span>
                <IconBrandYoutubeFilled size={35} />
              </Anchor>
              <Anchor
                className=' text-gray-400 duration-300 hover:text-yellow-400'
                target='_blank'
                href='https://github.com/ProjectMakamNetz'
                onClick={close}
              >
                <span>Github</span>
                <IconBrandGithub size={35} />
              </Anchor>
              <Anchor
                className='text-gray-400 duration-300 hover:text-yellow-400'
                target='_blank'
                href='https://youtube.com'
                onClick={close}
              >
                <IconLanguage size={35} />
              </Anchor>
            </Flex>
          </Flex>
        </Drawer>
        <Burger
          size={'lg'}
          visibleFrom='base'
          hiddenFrom='sm'
          opened={opened}
          onClick={open}
          aria-label='Toggle navigation'
        />
      </Flex>
      <Divider my={'sm'} />
    </Box>
  )
}
