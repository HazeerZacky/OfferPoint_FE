import React from "react"

export const FileUpload = (props)=> {
    return (
        <div class='file file--upload'>
            <label for='file-uploader'>
                <i class="fa fa-cloud-upload" aria-hidden="true"></i>
                Upload
            </label>
            <input type='file' id="file-uploader" accept={props.accept} onChange={props.onChange} />
        </div>
    )
}