import * as React from 'react'
import { Input } from 'react-aria-components'

import { cn } from '#app/utils/misc'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const _Input = ({ className, ...props }: InputProps) => {
	return (
		<Input
			className={cn(
				'flex h-12 w-full rounded-md border border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
				className,
			)}
			{...props}
		/>
	)
}

export { _Input as Input }
