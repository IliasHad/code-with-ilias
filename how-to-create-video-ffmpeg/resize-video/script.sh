ffmpeg  \
-i video.mp4  \
-vf "scale=1080:1920 \
:force_original_aspect_ratio=1, \
pad=1080:1920:(ow-iw)/2:(oh-ih)/2" output.mp4  

ffmpeg  -i video.mp4  -vf "scale=1080:1920" output_stretching.mp4