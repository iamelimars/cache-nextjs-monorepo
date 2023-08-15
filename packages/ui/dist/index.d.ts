declare const fetchTimezone: () => Promise<{
    datetime: string;
}>;
interface Options {
    version?: "v1";
}
declare class CustomApi {
    url: string;
    constructor(options: Options);
    /**
     * Get the current timestame in the new your timezone.
     * @returns A Promise
     */
    getTimezone(): Promise<{
        datetime: string;
    }>;
}

export { CustomApi, fetchTimezone };
