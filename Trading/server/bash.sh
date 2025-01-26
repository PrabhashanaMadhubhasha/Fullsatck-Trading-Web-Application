
NAME="server"
echo "reading"
read name
echo "$name"
if [ "$name" == "build" ]; then
echo "build"
npm install
npm run build
docker build -t "$NAME" .
elif [ "$name" == "run" ]; then
docker run -p 8000:8000 "$NAME"
else
echo "end"
fi
