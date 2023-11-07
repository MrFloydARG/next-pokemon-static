import NextLink from 'next/link';

import Image from 'next/image';

import { Link, Spacer, Text, useTheme } from '@nextui-org/react';

export const Navbar = () => {
  const { theme } = useTheme();

  // Se usa style pasa cambiar el estilo de los componentes de HTMl, y css para los de NextUI

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0x 20px',
        backgroundColor: theme?.colors.gray900.value,
      }}>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        alt='Icono'
        width={70}
        height={70}
      />
      <NextLink href='/' passHref>
        <Link>
          <Text color='white' h2>
            P
          </Text>
          <Text color='white' h3>
            okemon
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href='/favorites' passHref>
        <Link css={{ marginRight: '10px' }}>
          <Text color='white' h3>
            Favoritos
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
