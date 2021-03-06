declare namespace Bokeh {
    export interface Annotation extends Renderer, IAnnotation {}
    export interface IAnnotation extends IRenderer, IBackRef {
        level?: RenderLevel;
    }

    export var Legend: { new(attributes?: ILegend, options?: ModelOpts): Legend };
    export interface Legend extends Annotation, ILegend {}
    export interface ILegend extends IAnnotation {
        location?: LegendLocation;
        orientation?: Orientation;

        // {{{ background = include[FillProps]
        background_fill_color?: Color;
        background_fill_width?: number;
        background_fill_alpha?: Percent;
        background_fill_join?: LineJoin;
        background_fill_cap?: LineCap;
        background_fill_dash?: DashPattern;
        background_fill_dash_offset?: Int;
        // }}}

        // {{{ border = include[LineProps]
        border_line_color?: Color;
        border_line_width?: number;
        border_line_alpha?: Percent;
        border_line_join?: LineJoin;
        border_line_cap?: LineCap;
        border_line_dash?: DashPattern;
        border_line_dash_offset?: Int;
        // }}}

        // {{{ label = include[TextProps]
        label_text_font?: string;
        label_text_font_size?: FontSize;
        label_text_font_style?: FontStyle;
        label_text_color?: Color;
        label_text_alpha?: Percent;
        label_text_align?: TextAlign;
        label_text_baseline?: TextBaseline;
        // }}}

        label_standoff?: Int;
        label_height?: Int;
        label_width?: Int;

        glyph_height?: Int;
        glyph_width?: Int;

        legend_margin?: Int;
        legend_padding?: Int;
        legend_spacing?: Int;

        legends?: Array<[string, Array<GlyphRenderer>]>;
    }

    export var BoxAnnotation: { new(attributes?: IBoxAnnotation, options?: ModelOpts): BoxAnnotation };
    export interface BoxAnnotation extends Annotation, IBoxAnnotation {}
    export interface IBoxAnnotation extends IAnnotation, LineProps, FillProps {
        left?: Auto | Numerical;
        left_units?: SpatialUnits;

        right?: Auto | Numerical;
        right_units?: SpatialUnits;

        bottom?: Auto | Numerical;
        bottom_units?: SpatialUnits;

        top?: Auto | Numerical;
        top_units?: SpatialUnits;

        x_range_name?: string;
        y_range_name?: string;

        render_mode?: RenderMode;
    }

    export var PolyAnnotation: { new(attributes?: IPolyAnnotation, options?: ModelOpts): PolyAnnotation };
    export interface PolyAnnotation extends Annotation, IPolyAnnotation {}
    export interface IPolyAnnotation extends IAnnotation, LineProps, FillProps {
        xs?: Array<number>;
        xs_units?: SpatialUnits;

        ys?: Array<number>;
        ys_units?: SpatialUnits;

        x_range_name?: string;
        y_range_name?: string;
    }

    export var Span: { new(attributes?: ISpan, options?: ModelOpts): Span };
    export interface Span extends Annotation, ISpan {}
    export interface ISpan extends IAnnotation, LineProps {
        location?: number;
        location_units?: SpatialUnits;

        dimension?: Dimension;

        x_range_name?: string;
        y_range_name?: string;

        render_mode?: RenderMode;
    }

    export var TextAnnotation: { new(attributes?: ITextAnnotation, options?: ModelOpts): TextAnnotation };
    export interface TextAnnotation extends Annotation, ITextAnnotation {}
    export interface ITextAnnotation extends IAnnotation {}

    export var Title: { new(attributes?: ITitle, options?: ModelOpts): Title };
    export interface Title extends TextAnnotation, ITitle {}
    export interface ITitle extends ITextAnnotation {
        text?: string;

        title_align?: TextAlign;
        title_padding?: number;

        // {{{ label = include[TextProps]
        text_font?: string;
        text_font_size?: FontSize;
        text_font_style?: FontStyle;
        text_color?: Color;
        text_alpha?: Percent;
        //text_align?: TextAlign;
        //text_baseline?: TextBaseline;
        // }}}

        // {{{ background = include[FillProps]
        background_fill_color?: Color;
        background_fill_width?: number;
        background_fill_alpha?: Percent;
        background_fill_join?: LineJoin;
        background_fill_cap?: LineCap;
        background_fill_dash?: DashPattern;
        background_fill_dash_offset?: Int;
        // }}}

        // {{{ border = include[LineProps]
        border_line_color?: Color;
        border_line_width?: number;
        border_line_alpha?: Percent;
        border_line_join?: LineJoin;
        border_line_cap?: LineCap;
        border_line_dash?: DashPattern;
        border_line_dash_offset?: Int;
        // }}}

        render_mode?: RenderMode;
    }

    export var Overlay: { new(attributes?: IOverlay, options?: ModelOpts): Overlay };
    export interface Overlay extends Annotation, IOverlay {}
    export interface IOverlay extends IAnnotation {}

    export var Tooltip: { new(attributes?: ITooltip, options?: ModelOpts): Tooltip };
    export interface Tooltip extends Overlay, ITooltip {}
    export interface ITooltip extends IOverlay {
        attachment?: "horizontal" | "vertical" | "left" | "right" | "above" | "below";
        inner_only?: boolean;
    }
}
