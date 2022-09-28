import { PropType } from "vue";
export declare type IColor = "black" | "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink";
export declare const props: {
    color: {
        type: PropType<IColor>;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
};
declare const _default: import("vue").DefineComponent<{
    color: {
        type: PropType<IColor>;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: PropType<IColor>;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    color: IColor;
    icon: string;
}>;
export default _default;
