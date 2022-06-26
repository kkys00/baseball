const path = require('path'); //node에서 경로 쉽게 조작, 외우기

module.exports = {
    name: 'word-relay-setting', //불필요한데 웹팩 설정의 이름. 개발자가 지으면 됨
    mode: 'development', //이거는 개발용, 배포 실서비스에서는 production
    devtool: 'eval', //빠르게 하겠다.
    resolve: {
        extensions: ['.js', '.jsx'] //app에 파일 이름만 적으면 알아서 해당 이름을 가진 js, jsx 파일이 있는지 찾는다.
    },

    //**중요**/
    entry: {
        app: ['./client'], //app에 있는 파일들을 합쳐서 app.js로 만든다. client.jsx 안에다가 다른 파일들을 넣어놓으면 편함
    }, //입력

    modules: {
        rules: [{
            test: /\.jsx?/, //js파일과 jsx파일에 이 룰을 적용하겠다. 정규표현식을 공부해야 함
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'], //바벨의 옵션
            },
        }], //규칙이 여러 개가 있을 수 있으므로 배열임
    }, //entry 파일을 읽고 module 적용 후 output으로 뺀다~
    
    output: {
        path: path.join(__dirname, 'dist'), //경로를 알아서 합쳐줌
        filename: 'app.js',
    }, //출력
};
//터미널에 webpack이라고 쳐주면 알아서 합친다.