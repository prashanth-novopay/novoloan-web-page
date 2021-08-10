// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: csoWc72vkp7G4hixnuoRR5
// Component: dYqepsptLDD3
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: csoWc72vkp7G4hixnuoRR5/projectcss
import * as sty from "./PlasmicValueprop.module.css"; // plasmic-import: dYqepsptLDD3/css
import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: JT_I0IUMNNpN/icon

export const PlasmicValueprop__VariantProps = new Array(
  "dark",
  "flat",
  "vertical",
  "color",
  "card",
  "flatIcon",
  "justDescription"
);

export const PlasmicValueprop__ArgProps = new Array(
  "slot",
  "slot2",
  "slot22",
  "children"
);

function PlasmicValueprop__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__card]: hasVariant(variants, "card", "card"),
        [sty.root__card_vertical]:
          hasVariant(variants, "card", "card") &&
          hasVariant(variants, "vertical", "vertical"),
        [sty.root__flatIcon]: hasVariant(variants, "flatIcon", "flatIcon"),
        [sty.root__flat]: hasVariant(variants, "flat", "flat"),
        [sty.root__justDescription]: hasVariant(
          variants,
          "justDescription",
          "justDescription"
        ),

        [sty.root__vertical]: hasVariant(variants, "vertical", "vertical")
      })}
    >
      <div
        className={classNames(defaultcss.all, sty.freeBox__qe7Wg, {
          [sty.freeBox__card__qe7WGh6QJo]: hasVariant(variants, "card", "card"),
          [sty.freeBox__card_vertical__qe7WGh6QJo43Ikq]:
            hasVariant(variants, "card", "card") &&
            hasVariant(variants, "vertical", "vertical"),
          [sty.freeBox__color_lightQuarternary__qe7WgjJss]: hasVariant(
            variants,
            "color",
            "lightQuarternary"
          ),

          [sty.freeBox__flatIcon__qe7Wg8EbgR]: hasVariant(
            variants,
            "flatIcon",
            "flatIcon"
          ),

          [sty.freeBox__flat__qe7Wg1EPuG]: hasVariant(variants, "flat", "flat"),
          [sty.freeBox__vertical__qe7Wg43Ikq]: hasVariant(
            variants,
            "vertical",
            "vertical"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img__t1ZhY)}
              role={"img"}
              src={
                "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/twitter/281/red-apple_1f34e.png"
              }
            />
          ),

          value: args.slot2
        })}
      </div>

      {false ? (
        <div
          className={classNames(defaultcss.all, sty.freeBox___7Wkx, {
            [sty.freeBox__card___7Wkxh6QJo]: hasVariant(
              variants,
              "card",
              "card"
            ),

            [sty.freeBox__card_vertical___7Wkxh6QJo43Ikq]:
              hasVariant(variants, "card", "card") &&
              hasVariant(variants, "vertical", "vertical"),
            [sty.freeBox__color_lightQuarternary___7WkxJJss]: hasVariant(
              variants,
              "color",
              "lightQuarternary"
            ),

            [sty.freeBox__flatIcon___7Wkx8EbgR]: hasVariant(
              variants,
              "flatIcon",
              "flatIcon"
            ),

            [sty.freeBox__flat___7Wkx1EPuG]: hasVariant(
              variants,
              "flat",
              "flat"
            ),

            [sty.freeBox__vertical___7Wkx43Ikq]: hasVariant(
              variants,
              "vertical",
              "vertical"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <Icon8Icon
                className={classNames(defaultcss.all, sty.svg__xELeE)}
                role={"img"}
              />
            ),

            value: args.slot22
          })}
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox___4WZvr, {
          [sty.freeBox__flat___4WZvr1EPuG]: hasVariant(
            variants,
            "flat",
            "flat"
          ),

          [sty.freeBox__justDescription___4WZvrJyvom]: hasVariant(
            variants,
            "justDescription",
            "justDescription"
          )
        })}
      >
        {(
          hasVariant(variants, "justDescription", "justDescription")
            ? false
            : true
        )
          ? p.renderPlasmicSlot({
              defaultContents: "Label",
              value: args.children,
              className: classNames(sty.slotChildren, {
                [sty.slotChildren__dark]: hasVariant(variants, "dark", "dark"),
                [sty.slotChildren__justDescription]: hasVariant(
                  variants,
                  "justDescription",
                  "justDescription"
                )
              })
            })
          : null}
        {p.renderPlasmicSlot({
          defaultContents:
            "Porttitor feugiat a scelerisque nullam parturient vestibulum tempor a litora suscipit arcu potenti varius venenatis venenatis dapibus fames adipiscing in in taciti.",
          value: args.slot,
          className: classNames(sty.slotSlot, {
            [sty.slotSlot__card]: hasVariant(variants, "card", "card"),
            [sty.slotSlot__dark]: hasVariant(variants, "dark", "dark"),
            [sty.slotSlot__justDescription]: hasVariant(
              variants,
              "justDescription",
              "justDescription"
            )
          })
        })}
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicValueprop__ArgProps,
      internalVariantPropNames: PlasmicValueprop__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicValueprop__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValueprop";
  } else {
    func.displayName = `PlasmicValueprop.${nodeName}`;
  }
  return func;
}

export const PlasmicValueprop = Object.assign(
  // Top-level PlasmicValueprop renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicValueprop
    internalVariantProps: PlasmicValueprop__VariantProps,
    internalArgProps: PlasmicValueprop__ArgProps
  }
);

export default PlasmicValueprop;
/* prettier-ignore-end */