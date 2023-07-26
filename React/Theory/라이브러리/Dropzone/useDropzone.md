# Dropzone
0. 공식 문서
https://react-dropzone.js.org/

1. 설치
npm install --save react-dropzone
yarn add react-dropzone

<pre>
    <code>
        <!-- import -->
        import { useDropzone } from 'react-dropzone';

        <!-- 선언 -->
        const onDrop = useCallback((acceptedFiles) => {
		// 파일을 선택하거나 드래그 앤 드롭한 후 실행되는 콜백 함수

            if (acceptedFiles.length > 0) {
                setUpLoadedImgFile(acceptedFiles[0]);
            
                let reader = new FileReader();
                reader.onload = function (e) {
                setThumbnail(e.target.result);
                };
                reader.readAsDataURL(acceptedFiles[0]);
            }
        }, []);

        const dropRef = useRef(null);
        const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
            onDrop,
            noClick: true,
        });

        const handleOnClick = () => {
            dropRef.current.click();
        };

        const [upLoadedImgFile, setUpLoadedImgFile] = useState(""); // 등록한 이미지
	    const [thumbnail, setThumbnail] = useState(false); // 썸네일

        <!-- 호출 -->
        return (
            <div>
				<div {...getRootProps()} >
					<S.Inlabel htmlFor='files'>
						<S.LabelContainer>
							<FaArrowAltCircleUp style={{ fontSize: "240%" }} onClick={handleOnClick}/>
								<br />
								{isDragActive ? (
									<S.LabelText>사진을 이곳으로 드래그해주세요</S.LabelText>
								) : (
								    <S.LabelText>사진을 드래그하거나 클릭하여 업로드하세요</S.LabelText>
								)}
						</S.LabelContainer>
					</S.Inlabel>
				</div>
			    <S.ImgUploadWrapper id='files' {...getInputProps()} ref={dropRef}/>	
			</div>
        )
    </code>
</pre>