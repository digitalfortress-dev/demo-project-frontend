import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import clsx from "clsx";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { CircularProgress } from "@mui/material";

import { useStyles } from "./styles";

export interface IFile {
  result: any;
  file: File;
}

interface Props {
  fileType?: string;
  onSelectFile(file: IFile): void;
  disabled?: boolean;
  isVisibleFile?: boolean;
  multiple?: boolean;
}

export default function UploadFile(props: Props) {
  const classes = useStyles();
  const {
    fileType,
    onSelectFile,
    disabled = false,
    multiple = false,
  } = props;

  const [loading, setLoading] = useState(false);

  const onDropFile = useCallback(
    (files) => {
      setLoading(true);
      onSelectFile(files);
    },
    [onSelectFile]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onDropFile,
    accept: fileType,
  });

  return (
    <div>
      <div className={classes.uploadImage} {...getRootProps()}>
        {loading && (
          <CircularProgress className={classes.loading} color="secondary" />
        )}
        <input {...getInputProps()} multiple={multiple} disabled={disabled} />
        <div className={clsx(classes.flex, classes.alignCenter, classes.box)}>
          <CameraAltOutlinedIcon className={classes.iconCamera} /> Add picture
        </div>
      </div>
    </div>
  );
}
