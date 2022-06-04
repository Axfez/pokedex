import Pill from "./Pill"
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { addDecorator } from "@storybook/react"


const theme = createTheme({})

addDecorator((theme) => (
    <ThemeProvider theme={theme}>{theme()}</ThemeProvider>
))

export default {
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
    title: 'Pill',
    component: 'Pill'
}

const Template = args => <Pill {...args} />;

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
    content: 'Fire'
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