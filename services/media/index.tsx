export const breakpoints = {
    sm: 480,
    md: 769,
    lg: 1024,
    xl: 1200,
} as const;

export type BreakpointName = keyof typeof breakpoints;

/**
 * Helper for media queries.
 */
export const media = {
    /**
     * @example media.min('md')
     * // returns `@media (min-width: 768px)`
     */
    min: (name: BreakpointName) => `@media (min-width: ${breakpoints[name]}px)`,

    /**
     * @example media.max('lg')
     * // returns `@media (max-width: 1023px) - lg breakpoint minus one`
     */
    max: (name: BreakpointName) => `@media (max-width: ${breakpoints[name] - 1}px)`,

    /**
     * @example media.between('md', 'lg')
     * // returns `@media (min-width: 768px) and (max-width: 1023px)`
     */
    between: (minName: BreakpointName, maxName: BreakpointName) =>
        `@media (min-width: ${breakpoints[minName]}px) and (max-width: ${
            breakpoints[maxName] - 1
        }px)`,
};
