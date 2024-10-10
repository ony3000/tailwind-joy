import { Box, Checkbox } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function CheckboxNoIcons() {
  return (
    <DisplayStand>
      <Box className="w-[343px] max-w-full">
        <div className="text-joy-neutral-600 dark:text-joy-neutral-400 mb-4 text-sm font-semibold">
          Pizza toppings
        </div>
        <div role="group" aria-labelledby="topping">
          <div className="flex flex-wrap gap-2">
            {[
              'Pepperoni',
              'Cheese',
              'Olives',
              'Tomatoes',
              'Fried Bacon',
              'Spinach',
            ].map((item, index) => (
              <div
                key={item}
                className="relative px-3 py-1 [--unstable_actionRadius:20px]"
              >
                <Checkbox
                  disabled={index === 0}
                  overlay
                  disableIcon
                  variant="soft"
                  label={item}
                />
              </div>
            ))}
          </div>
        </div>
      </Box>
    </DisplayStand>
  );
}
