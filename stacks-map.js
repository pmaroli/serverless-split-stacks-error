'use strict';

module.exports = (resource, logicalId) => {

	if(resource.Type === 'AWS::Lambda::Function') {
		return {
			destination: `Function${logicalId}`
		};
	}

	return false;
};
