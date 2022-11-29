/* Dummy for the services in slider */
import OspImage from "../../../images/background/TelecommunicationsEngineering/OSPEngineering.png";
import IspImage from "../../../images/background/TelecommunicationsEngineering/ISPEngineering.png";
import SpliceSSImage from "../../../images/background/TelecommunicationsEngineering/SpliceSheetsSchematics.png";
import SUETImage from "../../../images/background/TelecommunicationsEngineering/SubsurfaceUtilityEngineering.png";

import PermitePackagePImage from "../../../images/background/PermittingAndCompliance/PermitPackagePrep.png";
import TraficControlImage from "../../../images/background/PermittingAndCompliance/TrafficControlPlans.png";
import PublicRecordsImage from "../../../images/background/PermittingAndCompliance/PublicRecordRequests.png";
import SUEPImage from "../../../images/background/PermittingAndCompliance/SubsurfaceUtilityEngineering.png";

import DataConversionImage from "../../../images/background/GISServices/DesignDrafting.png";
import DataCleaning from "../../../images/background/GISServices/DataCleaning.png";
import AramisImage from "../../../images/background/GISServices/ARAMISDesignDrafting.png";
import IDDSImage from "../../../images/background/GISServices/IDDSDrafting.png";

import CustomCADImage from "../../../images/background/CADServices/CustomCADPlugins.png";
import DataConversionSImage from "../../../images/background/CADServices/DataConversionServices.png";
import RecordDigitizationImage from "../../../images/background/CADServices/RecordDigitization.png";
import Redlines from "../../../images/background/CADServices/Redlines.png";

import AsBuiltSurveysImage from "../../../images/background/FieldSurveyingUtilityLocating/AsBuiltSurveys.png";
import GroundPenetratingImage from "../../../images/background/FieldSurveyingUtilityLocating/GroundPenetratingRadar.png";
import SurveysImage from "../../../images/background/FieldSurveyingUtilityLocating/MakeReadySurveys.png";
import UAVSurveysImage from "../../../images/background/FieldSurveyingUtilityLocating/UAVSurveys.png";
export const services = [
  {
    id: "01 /",
    title: "Telecommunications Engineering",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",

    subservices: [
      {
        name: "Outside Plant Engineering (OSP)",
        image: OspImage,
      } /*  */,
      {
        name: "Inside Plant Engineering (ISP)",
        image: IspImage,
      },
      {
        name: "Splice Sheets & Schematics",
        image: SpliceSSImage,
      },
      {
        name: "Subsurface Utility Engineering (SUE) for Telecommunications",
        image: SUETImage,
      },
    ],
  },
  {
    id: "02 /",
    title: "Permitting & Compliance",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",

    subservices: [
      {
        name: "Permit Package Preparation",
        image: PermitePackagePImage,
      },
      {
        name: "Traffic Control Plans (TCPs) and Maintenance of Traffic Plans (MOTs)",
        image: TraficControlImage,
      },
      {
        name: "Public Records Requests",
        image: PublicRecordsImage,
      },
      {
        name: "Subsurface Utility Engineering (SUE) for Permitting",
        image: SUEPImage,
      },
    ],
  },
  {
    id: "03 /",
    title: "GIS Services",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",

    subservices: [
      {
        name: "Data Cleaning, Validation, and Quality Control",
        image: DataCleaning,
      },
      {
        name: "AT&T ARAMIS Design & Drafting",
        image: AramisImage,
      },
      {
        name: "Verizon ICGIS/IDDS Design & Drafting",
        image: IDDSImage,
      },
      {
        name: "3-GIS Design & Drafting",
        image: DataConversionImage,
      },
    ],
  },
  {
    id: "04 /",
    title: "CAD Services",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",

    subservices: [
      {
        name: "Record Digitization",
        image: RecordDigitizationImage,
      },
      {
        name: "Redlining",
        image: Redlines,
      },
      {
        name: "CAD-GIS Integration Services",
        image: DataConversionSImage,
      },
      {
        name: "Custom CAD Plug-In & Automation Development",
        image: CustomCADImage,
      },
    ],
  },
  {
    id: "05 /",
    title: "Field Surveying & Utility Locating",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",

    subservices: [
      {
        name: "Ground Penetrating Radar (GPR) Utility Locating",
        image: GroundPenetratingImage,
      },
      {
        name: "Unmanned Aerial Vehicle (UAV) Surveys",
        image: UAVSurveysImage,
      },
      {
        name: "Make-Ready Surveys",
        image: SurveysImage,
      },
      {
        name: "As-Built Surveys",
        image: AsBuiltSurveysImage,
      },
    ],
  },
];
