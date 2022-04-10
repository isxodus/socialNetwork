import React from 'react';
import {render, screen} from '@testing-library/react';
import {App} from './App';
import {store} from './redux/reduxStore'


test('renders learn react link', () => {
    render(<App data={store.getState()} dispatch={store.dispatch}
    />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
