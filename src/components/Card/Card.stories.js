import Card from './Card'

export default {
    title: 'Card',
    component: 'Card'
}

const Template = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'default',
    content: '...'
}

export const Grass = Template.bind({});
Grass.args = {
    type: 'grass',
    content: 'Grass'
}

export const Poison = Template.bind({});
Poison.args = {
    type: 'poison',
    content: 'Poison'
}

export const Fire = Template.bind({});
Fire.args = {
    type: 'fire',
    content: 'Fire',
    backgroundColor: '#FF8C00'
}

export const Water = Template.bind({});
Water.args = {
    type: 'water',
    content: 'Water'
}

export const Lightning = Template.bind({});
Lightning.args = {
    type: 'lightning',
    content: 'Lightning'
}