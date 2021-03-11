import React from 'react';
import logo from './logo.svg';

function Page() {
  return (
      <div>
          {__toolbar()}
          <Content />
          {__footer()}
      </div>
  );
}

function __toolbar() {
    return (
        <div>
            <table className="Toolbar">
                <tr>
                    <td>Gielinor Simulator</td>
                </tr>
            </table>
        </div>
    );
}

function __footer() {
    return __toolbar();
}

interface IContentData {
    isHome?: boolean,
    target?: string,
}

class Content extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = { isHome: true };
    }

    public render() {
        return (
            <div></div>
        );
    }

    private __setState(props: IContentData) {
        this.setState(props);
    }

    private __goHome() {
        this.__setState({
            isHome: true,
            target: undefined,
        });
    }

    private __setTarget(target: string) {
        this.__setState({
            isHome: false,
            target: target,
        });
    }
}

export default Page;
