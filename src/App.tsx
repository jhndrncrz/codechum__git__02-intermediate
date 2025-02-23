import { NavLink, Outlet } from 'react-router';
import { AppShell, Burger, Flex, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
              <AppShell.Header
                  bg='blue'
              >
                  <Flex
                      p='sm'
                      h='100%'
                      justify='space-between'
                      align='center'
                  >
                      <Text>
                          scaffl.ed Demo
                      </Text>

                      <Burger
                          opened={opened}
                          onClick={toggle}
                          hiddenFrom="sm"
                          size="sm"
                      />
                  </Flex>
              </AppShell.Header>

              <AppShell.Navbar
                  p="md"
              >
                  <Flex direction='column'>
                      <NavLink to='/'>
                          Code Editor
                      </NavLink>

                      <NavLink to='/eye-tracker'>
                          Eye Tracker
                      </NavLink>

                      <NavLink to='/mouse-tracker'>
                          Mouse Tracker
                      </NavLink>
                  </Flex>
              </AppShell.Navbar>

              <AppShell.Main>
                  <Outlet />
              </AppShell.Main>
        </AppShell>
  );
}