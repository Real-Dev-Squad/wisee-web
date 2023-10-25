import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta = {
    title: "Example/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: "primary",
        children: "button"
    },
};
