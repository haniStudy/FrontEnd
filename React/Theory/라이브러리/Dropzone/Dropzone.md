# Dropzone
0. 공식 문서
https://react-dropzone.js.org/

1. 설치
npm install --save react-dropzone
yarn add react-dropzone

<pre>
    <code>
        <!-- import -->
        import {useDropzone} from 'react-dropzone';

        <!-- 선언 -->
        const onDrop = useCallback(acceptedFiles => {
            // Do something with the files
                console.log(acceptedFiles)
        }, [])
        const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

        <!-- 호출 -->
        return (
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>
        )
    </code>
</pre>