const express = require('express');
const router = express.Router();

const problemService = require('../services/problemService');

router.get('/problems', function(req, res) {   //router is /problems then get
	problemService.getProblems()				//执行service的相应操作
		.then(problems => res.json(problems));	//如果成功get到东西则用json的形式返回，此处不需要req，因为直接返回所有problems，没有区别
});

module.exports = router;  // 将该程序以router的名字export出去，其他的文件才可以用