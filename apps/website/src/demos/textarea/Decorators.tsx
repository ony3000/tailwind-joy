import { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  Textarea,
  Typography,
} from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TextareaDecorators() {
  const [text, setText] = useState('');

  const addEmoji = (emoji: string) =>
    setText((prevText) => `${prevText}${emoji}`);

  return (
    <DisplayStand>
      <Textarea
        placeholder="Type in here..."
        value={text}
        onChange={(event) => setText(event.target.value)}
        minRows={2}
        maxRows={4}
        startDecorator={
          <Box className="flex flex-1 gap-1">
            <IconButton variant="outlined" onClick={() => addEmoji('👍')}>
              👍
            </IconButton>
            <IconButton variant="outlined" onClick={() => addEmoji('🏖')}>
              🏖
            </IconButton>
            <IconButton variant="outlined" onClick={() => addEmoji('😍')}>
              😍
            </IconButton>
            <Button variant="outlined" color="neutral" className="ml-auto">
              See all
            </Button>
          </Box>
        }
        endDecorator={
          <Typography level="body-xs" className="ml-auto">
            {text.length} character(s)
          </Typography>
        }
        className="min-w-[300px]"
      />
    </DisplayStand>
  );
}
