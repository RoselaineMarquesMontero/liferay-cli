import React from 'react';
import { Button, ButtonGroup, Stack } from '@chakra-ui/react'

export default () => {
    return (
        <Stack spacing={ 4 } direction='row' align='center'>
            <Button colorScheme='teal' size='xs'>
                Button
            </Button>
            <Button colorScheme='teal' size='sm'>
                Button
            </Button>
            <Button colorScheme='teal' size='md'>
                Button
            </Button>
            <Button colorScheme='teal' size='lg'>
                Button
            </Button>
        </Stack>
    );
}