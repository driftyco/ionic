# ion-accordion-group

Accordion group is a container for accordion instances. It manages the state of the accordions and provides keyboard navigation.

For more information as well as usage, see the [Accordion Documentation](./accordion)

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                  | Type                                      | Default     |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ----------- |
| `animated` | `animated` | If `true`, all accordions inside of the accordion group will animate when expanding or collapsing.                           | `boolean`                                 | `true`      |
| `disabled` | `disabled` | If `true`, the accordion group cannot be interacted with.                                                                    | `boolean`                                 | `false`     |
| `expand`   | `expand`   | Describes the expansion behavior for each accordion. Possible values are `"compact"` and `"inset"`. Defaults to `"compact"`. | `"compact" \| "inset"`                    | `'compact'` |
| `mode`     | `mode`     | The mode determines which platform styles to use.                                                                            | `"ios" \| "md"`                           | `undefined` |
| `multiple` | `multiple` | If `true`, the accordion group can have multiple accordion components expanded at the same time.                             | `boolean \| undefined`                    | `undefined` |
| `readonly` | `readonly` | If `true`, the accordion group cannot be interacted with, but does not alter the opacity.                                    | `boolean`                                 | `false`     |
| `value`    | `value`    | The value of the accordion group.                                                                                            | `null \| string \| string[] \| undefined` | `undefined` |


## Events

| Event       | Description                                  | Type                                                |
| ----------- | -------------------------------------------- | --------------------------------------------------- |
| `ionChange` | Emitted when the value property has changed. | `CustomEvent<AccordionGroupChangeEventDetail<any>>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
