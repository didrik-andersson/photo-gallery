import styled from "styled-components";

import { theme } from "../../../layout/theme";

const size = (input) => `${input * 8}px`;

export const StyledButton = styled.button`
  height: ${size(5)};
  padding: 0 ${size(2)};
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  border-radius: 3px;
  background: ${theme.colors.button.base.default};
  color: ${theme.colors.button.base.text};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transform-origin: 50% 50%;
  transition: background-color 75ms, transform 200ms ease;
  white-space: nowrap;
  border: none;
  cursor: pointer;

  :active {
    transform: scale(0.97);
  }

  /**
   *  States
   */
  &[disabled] {
    background: ${theme.colors.button.disabled.default};
    color: ${theme.colors.button.disabled.text};
    cursor: not-allowed;
  }

  &:not([disabled]):hover {
    background: ${theme.colors.button.base.hover};
  }

  /**
  *  Tones
  */
  &.tone-forward {
    &:not([disabled]) {
      background: ${theme.colors.button.forward.default};

      &:hover {
        background: ${theme.colors.button.forward.hover};
      }
    }
  }

  &.tone-positive {
    &:not([disabled]) {
      background: ${theme.colors.button.positive.default};
      color: ${theme.colors.button.positive.text};

      &:hover {
        background: ${theme.colors.button.positive.hover};
      }
    }
  }

  &.tone-soft {
    &:not([disabled]) {
      background: ${theme.colors.button.soft.default};
      color: ${theme.colors.button.soft.text};

      &:hover {
        background: ${theme.colors.button.soft.hover};
        border: 1px solid ${theme.colors.border.hover};
      }
    }
  }

  &.tone-ghost {
    border: 1px solid ${theme.colors.button.ghost.default};

    &:not([disabled]) {
      background: transparent;
      color: ${theme.colors.button.ghost.text};

      &:hover {
        background-color: transparent;
        border-color: ${theme.colors.button.ghost.hover};
      }
    }

    &[disabled] {
      background: ${theme.colors.button.ghost.disabledBackground};
      color: ${theme.colors.button.ghost.disabledText};
    }
  }

  &.tone-transparent {
    background: transparent;
    color: ${theme.colors.text.link};
    transition: 50ms;

    &:hover {
      background: transparent;
      &:not(.active) {
        color: ${theme.colors.text.linkHover};
      }
    }

    &.active {
      color: ${theme.colors.text.main};
      cursor: default;
    }
  }

  /**
   *  Sizes
   */
  &.size-small {
    height: ${size(4)};
    font-size: 0.875rem;
  }

  &.size-large {
    height: ${size(6)};
    font-size: 1rem;
  }

  /**
   *  Rounded
   */
  &.rounded {
    border-radius: 99em;
    padding: 0 ${size(3)};

    ${theme.screens.Md} {
      padding: 0 ${size(4)};
    }
  }

  /**
   * Circle
   */
  &.circle {
    border-radius: 50%;
    padding: 0;
    width: ${size(5)};

    ${theme.screens.Md} {
      width: ${size(6)};
    }
  }

  /**
   *  Full
   */
  &.full {
    width: 100%;
  }

  /**
   *  Wide
   */
  &.wide {
    width: 445px;
  }

  ${theme.screens.Md} {
    padding: 0 ${size(3)};
    height: ${size(6)};
    font-size: 1.125rem;

    /**
    *  Sizes
    */
    &.size-small {
      height: ${size(5)};
      font-size: 1rem;
    }

    &.size-large {
      height: ${size(7)};
      font-size: 1.25rem;
    }
  }
`;
