// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  /**
   * 테마가 어떻게 보일지 설명할 부분
   */
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}
