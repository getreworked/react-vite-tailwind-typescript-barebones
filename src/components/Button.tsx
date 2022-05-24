import { HTMLAttributes } from 'react';

function Button({ children, className, ...rest }: HTMLAttributes<HTMLButtonElement>) {
  const classes = ['button', className].join(' ');

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export { Button };
