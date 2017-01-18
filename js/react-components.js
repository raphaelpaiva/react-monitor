const controllers = [
  {
    name: "atron:29990",
    hosts: [
      {
        name: "vmsigap2",
        instances:[
          {
            name: "sigadoc-server01",
            heap: "0.44",
            maxHeap: "1.0"
          },
          {
            name: "sigadoc-server02",
            heap: "0.31",
            maxHeap: "0.88"
          },
          {
            name: "sigatp-server01",
            heap: "0.73",
            maxHeap: "0.91"
          }
        ]
      },
      {
        name: "vmsigap3",
        instances:[
          {
            name: "sigadoc-server01",
            heap: "0.44",
            maxHeap: "1.0"
          },
          {
            name: "sigadoc-server02",
            heap: "0.31",
            maxHeap: "0.88"
          },
          {
            name: "sigatp-server01",
            heap: "0.73",
            maxHeap: "0.91"
          }
        ]
      },
      {
        name: "vmsigap5",
        instances:[
          {
            name: "sigadoc-server01",
            heap: "0.44",
            maxHeap: "1.0"
          },
          {
            name: "sigadoc-server02",
            heap: "0.31",
            maxHeap: "0.88"
          },
          {
            name: "sigatp-server01",
            heap: "0.73",
            maxHeap: "0.91"
          }
        ]
      },
      {
        name: "vmpsigap7",
        instances:[
          {
            name: "sigadoc-server01",
            heap: "0.44",
            maxHeap: "1.0"
          },
          {
            name: "sigadoc-server02",
            heap: "0.31",
            maxHeap: "0.88"
          },
          {
            name: "sigatp-server01",
            heap: "0.73",
            maxHeap: "0.91"
          }
        ]
      }
    ]
  },
  {
    name: "atron:39990",
    hosts: [
      {
        name: "vmsigap4",
        instances: [
          {
            name: "rem-server01",
            heap: "1.5",
            maxHeap: "3.0"
          },
          {
            name: "sigarh-server01",
            heap: "1.5",
            maxHeap: "3.0"
          },
          {
            name: "sigarh-server02",
            heap: "1.2",
            maxHeap: "4.0"
          }
        ]
      }
    ]
  }
];

function Instance(props) {
  return (
    <li title={props.heap + " / " + props.maxHeap + "gb"} className="list-group-item">
      <div>
        <span>{props.name}</span>
        <div id={props.name} title={props.heap / props.maxHeap} className="pb" />
      </div>
    </li>
  );
}

function Host(props) {
  return (
    <article className="col-sm-4 panel-body">
      <section className="panel panel-primary">
        <header className="panel-heading">
          <h2 className="panel-title">{props.name}</h2>
        </header>
        <section className="panel-body">
          <ul className="list-group">
            {props.instances.map(function(instance) {
              return <Instance key={instance.name} name={instance.name} heap={instance.heap} maxHeap={instance.maxHeap} />
            })}
          </ul>
        </section>
      </section>
    </article>
  );
}

function Controller(props) {
  return (
        <article className="panel panel-primary">
          <header className="panel-heading">
            <h2 className="panel-title">{props.name}</h2>
          </header>
          <section className="panel-body">
            {props.hosts.map(function(host) {
              return <Host key={host.name} name={host.name} instances={host.instances} />
            })}
          </section>
        </article>
  );
}

function Controllers(props) {
  return (
    <div>
      {props.controllers.map(function(controller){
        return <Controller key={controller.name} name={controller.name} hosts={controller.hosts} />
      })}
    </div>
  );
}

const element = <Controllers controllers={controllers} />;

ReactDOM.render(
  element,
  document.getElementById('root')
);

jQuery('.pb').each(function(a){createBar(this,this.title)})
