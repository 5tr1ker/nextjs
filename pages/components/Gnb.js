import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default function Gnb() {

    const activeItem = 'aboutUs';
    return (
        <Menu>
        <Menu.Item>Our Company</Menu.Item>
        <Menu.Item
          name='aboutUs'
          active={activeItem === 'aboutUs'}
        />
        <Menu.Item
          name='jobs'
          active={activeItem === 'jobs'}
        />
        <Menu.Item
          name='locations'
          active={activeItem === 'locations'}
        />
      </Menu>
    )
}