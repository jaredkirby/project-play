'use client';

import { Container, Group, Burger } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import classes from './HeaderSimple.module.css';
import { ActionToggle } from '@/components/ActionToggle/ActionToggle';

const links = [{ link: '/about', label: 'Features' }];

export function HeaderSimple() {
  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <MantineLogo size={28} />
        <ActionToggle />
      </Container>
    </header>
  );
}
