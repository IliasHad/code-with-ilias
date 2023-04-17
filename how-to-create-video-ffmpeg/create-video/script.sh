ffmpeg -f lavfi \
-i color=c=black:s=1080x1920:d=5 \
-vf "drawtext=enable='gte(t,2)':fontsize=30: \
fontcolor=white:x=(w-text_w)/2:y=(h-text_h)/2 \
:text='Code with Ilias'" output.mp4