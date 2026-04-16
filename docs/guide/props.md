# Props Reference

## Component Props

| Prop            | Type                                          | Default        | Description                            |
| --------------- | --------------------------------------------- | -------------- | -------------------------------------- |
| `size`          | `'sm' \| 'md' \| 'line'`                      | `'md'`         | Size/type preset                       |
| `color-variant` | `'colorful' \| 'mono' \| 'ocean' \| 'sunset'` | `'colorful'`   | Color palette                          |
| `theme`         | `'dark' \| 'light' \| 'auto'`                 | `'dark'`       | Background adaptation                  |
| `static-colors` | `boolean`                                     | `false`        | Disable hue-shift animation            |
| `duration`      | `number`                                      | `1.96` / `2.4` | Animation cycle in seconds             |
| `active`        | `boolean`                                     | `true`         | Whether animation is playing           |
| `border-radius` | `number`                                      | Auto-detected  | Custom border radius in px             |
| `brightness`    | `number`                                      | `1.3`          | Glow brightness multiplier             |
| `saturation`    | `number`                                      | Theme default  | Glow saturation multiplier             |
| `hue-range`     | `number`                                      | `30`           | Hue rotation range in degrees          |
| `strength`      | `number`                                      | `1`            | Effect opacity (0-1), beam layers only |

## Events

| Event        | Description                             |
| ------------ | --------------------------------------- |
| `activate`   | Fired when fade-in animation completes  |
| `deactivate` | Fired when fade-out animation completes |

## Slots

| Slot      | Description                                 |
| --------- | ------------------------------------------- |
| `default` | Content to wrap with the border beam effect |
