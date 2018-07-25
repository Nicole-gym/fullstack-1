import json
from flask import Flask
app = Flask(__name__)
from flask import jsonify
from flask import request

import executor_utils as eu

@app.route('/build_and_run', methods=['POST'])
def build_and_run():
	data =request.get_json()
	if 'code' not in data or 'lang' not in data:
		return 'You should provide "code" and "lang"'

	code = data['code']
	lang = data['lang']

	print("API got called with code: %s in %s" % (code, lang))

	result = eu.build_and_run(code, lang)

	return jsonify(result)

if __name__ == '__main__':   ##当直接调用executor_server时，__name__ == __main__
	import sys
	port = int(sys.argv[1])
	eu.load_image()     #docker容器起来
	app.run(port = port)
    app.run(debbug = True)  ##当debugweitrue时，当改动代码时，会自动从新build