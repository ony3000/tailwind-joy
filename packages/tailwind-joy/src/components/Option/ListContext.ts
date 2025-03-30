import type {
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  SyntheticEvent,
} from 'react';
import { createContext } from 'react';

type BlurAction = {
  type: 'list:blur';
  event: FocusEvent;
};

type FocusAction = {
  type: 'list:focus';
  event: FocusEvent;
};

type ItemClickAction<ItemValue> = {
  type: 'list:itemClick';
  item: ItemValue;
  event: MouseEvent;
};

type ItemHoverAction<ItemValue> = {
  type: 'list:itemHover';
  item: ItemValue;
  event: MouseEvent;
};

type ItemsChangeAction<ItemValue> = {
  type: 'list:itemsChange';
  event: null;
  items: ItemValue[];
  previousItems: ItemValue[];
};

type KeyDownAction = {
  type: 'list:keyDown';
  key: string;
  event: KeyboardEvent;
};

type ResetHighlightAction = {
  type: 'list:resetHighlight';
  event: SyntheticEvent | null;
};

type HighlightLastAction = {
  type: 'list:highlightLast';
  event: SyntheticEvent | null;
};

type TextNavigationAction = {
  type: 'list:textNavigation';
  event: KeyboardEvent;
  searchString: string;
};

type ClearSelectionAction = {
  type: 'list:clearSelection';
};

/**
 * A union of all standard actions that can be dispatched to the list reducer.
 */
type ListAction<ItemValue> =
  | BlurAction
  | FocusAction
  | ItemClickAction<ItemValue>
  | ItemHoverAction<ItemValue>
  | ItemsChangeAction<ItemValue>
  | KeyDownAction
  | ResetHighlightAction
  | HighlightLastAction
  | TextNavigationAction
  | ClearSelectionAction;

type ListItemState = {
  /**
   * Determines if the item is focusable (its focus is managed by the DOM).
   */
  focusable: boolean;
  /**
   * If `true` the item is highlighted.
   */
  highlighted: boolean;
  /**
   * If `true` the item is selected.
   */
  selected: boolean;
};

type ListContextValue<ItemValue> = {
  dispatch: (action: ListAction<ItemValue>) => void;
  getItemState: (item: ItemValue) => ListItemState;
};

export const ListContext = createContext<ListContextValue<any> | undefined>(
  undefined,
);
