import anymate from '../src';

// TODO: better keyframes fn mock
const kf = (template: string, ...args: any[]) => {
	return args.reduce((acc, arg, index) => [...acc, arg, template[index + 1]], [
		template[0]
	]);
};

const {blink} = anymate(kf);

describe('blink', () => {
	it('blink animation', () => {
		expect(blink('hotpink')).toMatchInlineSnapshot(`
      Array [
        "
      	from, to {
      		color: transparent;
      	}

      	50% {
      		color: ",
        "hotpink",
        ";
      	}
      ",
      ]
    `);
	});
});
