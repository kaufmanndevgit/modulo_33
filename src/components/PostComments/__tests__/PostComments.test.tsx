import { fireEvent, render, screen } from '@testing-library/react';

import PostComment from '../index';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve renderizar dois comentários correntamente', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('textarea-comment'), {
            target: {
                value: 'Não gostei da miniatura miniatura'
            }
        })
        fireEvent.submit(screen.getByTestId('btn-comment'));

        fireEvent.change(screen.getByTestId('textarea-comment'), {
            target: {
                value: 'Não sou fã do Batman'
            }
        });
        fireEvent.submit(screen.getByTestId('btn-comment'));

        expect(screen.getAllByTestId('comentario')).toHaveLength(2)
    });
});