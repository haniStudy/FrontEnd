\

<pre>
    <code>
        import  {  FileUploader  }  from  "react-drag-drop-files";
		
		const [upLoadedImgFile, setUpLoadedImgFile] = useState(""); // 등록한 이미지
		const handleChangeImgFile = (e) => {
			setUpLoadedImgFile(e);
		};

        <S.Inlabel For='files'>
			<FileUploader handleChange={handleChangeImgFile} name="file">
				<S.LabelContainer>
					<FaArrowAltCircleUp style={{ fontSize: "240%" }} />
						<br />
					<S.LabelText>사진을 드래그하거나 클릭하여 업로드하세요</S.LabelText>
				</S.LabelContainer>
			</FileUploader>
		</S.Inlabel>

    </code>
</pre>