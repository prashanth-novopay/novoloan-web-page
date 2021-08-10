// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: csoWc72vkp7G4hixnuoRR5
// Component: qSJFN-Q4T-kD
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Navigation from "../../Navigation"; // plasmic-import: rjq5jLt8dsGK/component
import Button from "../../Button"; // plasmic-import: 62BHbKVWdcb_/component
import Divider from "../../Divider"; // plasmic-import: 1Q9IytxXJBqV/component
import Textinput from "../../Textinput"; // plasmic-import: _cy61VkHx7GJ/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: R6NSkSEKJa8o/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: csoWc72vkp7G4hixnuoRR5/projectcss
import * as sty from "./PlasmicHeroSection2.module.css"; // plasmic-import: qSJFN-Q4T-kD/css
import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: t6iEol6lZGZl/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: d5NWg6AWBDo_/icon

export const PlasmicHeroSection2__VariantProps = new Array();

export const PlasmicHeroSection2__ArgProps = new Array(
  "foreground",
  "children"
);

function PlasmicHeroSection2__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <Navigation
              className={classNames("__wab_instance", sty.navigation__zqtBn)}
              hideCta={"hideCta"}
            >
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__uCoO2)}
                role={"img"}
                src={"/plasmic/landing_page_starter/images/image13.svg"}
              />
            </Navigation>
          ),

          value: args.children
        })}
      </div>

      <div
        data-plasmic-name={"hero3"}
        data-plasmic-override={overrides.hero3}
        className={classNames(defaultcss.all, sty.hero3)}
      >
        <img
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(defaultcss.img, sty.img)}
          role={"img"}
          src={
            "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80"
          }
        />

        <div
          data-plasmic-name={"background3"}
          data-plasmic-override={overrides.background3}
          className={classNames(defaultcss.all, sty.background3)}
        />

        <p.Stack
          as={"div"}
          data-plasmic-name={"foreground"}
          data-plasmic-override={overrides.foreground}
          hasGap={true}
          className={classNames(defaultcss.all, sty.foreground)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__gnWyx)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.freeBox__j8Ze)}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        sty.freeBox___5B7LN
                      )}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.freeBox__uzSjg
                        )}
                      >
                        {"Updated!"}
                      </div>
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.freeBox___0SjC
                      )}
                    >
                      <span>
                        <React.Fragment>{"Designs that "}</React.Fragment>
                        <span style={{ textDecoration: "underline" }}>
                          {"adapt"}
                        </span>
                      </span>
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.freeBox__sqCli
                      )}
                    >
                      {
                        "Orci dui condimentum rutrum laoreet hac purus porta sem sem a vivamus a posuere vel molestie."
                      }
                    </div>
                  </p.Stack>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.freeBox__s1Di)}
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__gKjV3
                      )}
                      darkGray={"darkGray"}
                      slot={
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.freeBox___3Xfqb
                          )}
                        >
                          {"Start now ->"}
                        </div>
                      }
                    />

                    <Button
                      bgDifference={"bgDifference"}
                      className={classNames(
                        "__wab_instance",
                        sty.button__tnkVp
                      )}
                      darkGray={"darkGray"}
                      slot={
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.freeBox___2OOa4
                          )}
                        >
                          {"Learn more…"}
                        </div>
                      }
                    />
                  </p.Stack>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__bebOq)}
                >
                  <div
                    className={classNames(defaultcss.all, sty.freeBox__preTk)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(defaultcss.all, sty.freeBox__gNggI)}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.freeBox__nXyL2
                        )}
                      >
                        {"Sign up with"}
                      </div>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          defaultcss.all,
                          sty.freeBox__kuVqr
                        )}
                      >
                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button__vcKl
                          )}
                          ouline={"ouline"}
                          slot={"Apple"}
                          startIcon={"startIcon"}
                        />

                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button__poFtf
                          )}
                          ouline={"ouline"}
                          slot={"Google"}
                          startIcon={"startIcon"}
                        >
                          <Icon6Icon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__hq25E
                            )}
                            role={"img"}
                          />
                        </Button>
                      </p.Stack>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          defaultcss.all,
                          sty.freeBox__dHXZ
                        )}
                      >
                        <Divider
                          className={classNames(
                            "__wab_instance",
                            sty.divider__uNc9W
                          )}
                        />

                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.freeBox__r7VRn
                          )}
                        >
                          {"Or"}
                        </div>

                        <Divider
                          className={classNames(
                            "__wab_instance",
                            sty.divider__eC8Qr
                          )}
                        />
                      </p.Stack>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          defaultcss.all,
                          sty.freeBox__riIm6
                        )}
                      >
                        <Textinput
                          className={classNames(
                            "__wab_instance",
                            sty.textinput__qm26
                          )}
                        />

                        <Textinput
                          className={classNames(
                            "__wab_instance",
                            sty.textinput__iIft6
                          )}
                        />

                        <Textinput
                          className={classNames(
                            "__wab_instance",
                            sty.textinput__aaSK
                          )}
                        />
                      </p.Stack>

                      <Button
                        children2={
                          <Icon5Icon
                            className={classNames(
                              defaultcss.all,
                              sty.svg___67T3L
                            )}
                            role={"img"}
                          />
                        }
                        className={classNames(
                          "__wab_instance",
                          sty.button__xsk5
                        )}
                        colors={"indigo"}
                        slot={"Start your account"}
                      />
                    </p.Stack>

                    <Divider
                      className={classNames(
                        "__wab_instance",
                        sty.divider__tHqHu
                      )}
                    />

                    <div
                      className={classNames(defaultcss.all, sty.freeBox__tO9Y)}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.freeBox__b95Mx
                        )}
                      >
                        {
                          "A cras sagittis odio vestibulum pulvinar a eget hendrerit id vestibulum a leo sociosqu dictumst dictumst natoque magnis parturient."
                        }
                      </div>
                    </div>
                  </div>
                </p.Stack>
              </React.Fragment>
            ),

            value: args.foreground
          })}
        </p.Stack>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "hero3", "img", "background3", "foreground"],
  freeBox: ["freeBox"],
  hero3: ["hero3", "img", "background3", "foreground"],
  img: ["img"],
  background3: ["background3"],
  foreground: ["foreground"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeroSection2__ArgProps,
      internalVariantPropNames: PlasmicHeroSection2__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicHeroSection2__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeroSection2";
  } else {
    func.displayName = `PlasmicHeroSection2.${nodeName}`;
  }
  return func;
}

export const PlasmicHeroSection2 = Object.assign(
  // Top-level PlasmicHeroSection2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    hero3: makeNodeComponent("hero3"),
    img: makeNodeComponent("img"),
    background3: makeNodeComponent("background3"),
    foreground: makeNodeComponent("foreground"),
    // Metadata about props expected for PlasmicHeroSection2
    internalVariantProps: PlasmicHeroSection2__VariantProps,
    internalArgProps: PlasmicHeroSection2__ArgProps
  }
);

export default PlasmicHeroSection2;
/* prettier-ignore-end */
