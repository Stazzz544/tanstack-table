import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import cs from "classnames";
import styles from "./tables.module.css";
import { Person, defaultData } from "./bd";
import { NameCell } from "./name-cell/name-cell";
import React from "react";

const columnHelper = createColumnHelper<Person>();

export const Table = () => {
  const [data, setData] = useState(() => defaultData);

  const columns = React.useMemo<any>(
    () => [
      {
        header: "Name",
        columns: [
          columnHelper.accessor("firstName", {
            header: () => <span>Фамилия</span>,
          }),
          columnHelper.accessor("lastName", {
            cell: (info) => <NameCell text={info.getValue()} />,
            header: () => <span>Имя</span>,
          }),
          columnHelper.accessor("age", {
            header: () => "Возраст",
            minSize: 300,
            size: 999999, // вот тут по сути бесконечность но не более доступной ширины
          }),
          columnHelper.accessor("visits", {
            header: () => <span>Visits</span>,
            minSize: 300,
          }),
          columnHelper.accessor("status", {
            header: "Status",
          }),
          columnHelper.accessor("count", {
            header: "Profile Progress",
            minSize: 300,
          }),
        ],
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table className={cs(styles["table"])}>
        <thead className={cs(styles["t-head"])}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className={cs(styles["summary"])} key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const minWidth = header.column.columnDef.minSize;
                const width = header.column.columnDef.size || "auto";
                console.log(header.column.columnDef.minSize);
                console.log(header.getSize());

                return (
                  <th
                    style={{
                      minWidth,
                      width,
                    }}
                    className={cs(styles["header-cell"])}
                    key={header.id}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className={cs(styles["table-cell"])} key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores rerum
        nihil accusamus unde assumenda. Quia nemo impedit explicabo quo mollitia
        molestias dolore aut libero magni obcaecati quisquam repellat saepe quis
        voluptatem tenetur laborum magnam optio ex, exercitationem ducimus
        consequatur voluptates qui? Numquam alias tempora quaerat, maiores
        incidunt consequatur repellendus nisi ad fugit. Perspiciatis
        exercitationem quos soluta nemo reiciendis, voluptatem non porro ducimus
        hic pariatur dolor modi vel eum saepe ad perferendis officia similique
        ex fugiat tempora dolores! Iusto explicabo architecto quos quas ipsam
        voluptatum officia saepe temporibus. Consectetur, et. Voluptatem, iusto
        est. Asperiores earum iusto eligendi accusantium, optio amet possimus
        doloribus odio quaerat sequi ipsum, soluta expedita reiciendis laborum
        facilis natus tempora dolore. Modi atque ratione perspiciatis,
        cupiditate nihil inventore praesentium quasi ipsa ullam odit, fugiat
        sequi minus vitae placeat aspernatur aperiam ipsum quaerat doloribus eum
        qui. Laudantium voluptatibus quod veniam vel sequi! Fuga in, fugiat et
        modi, eius inventore ducimus atque, mollitia cum voluptatem alias? Vero
        voluptatem accusamus nostrum eligendi ex quos libero nisi, reiciendis
        minima ut repellendus voluptates dolores distinctio praesentium ad
        quisquam repellat quis modi odit eum qui harum delectus ea. Error, quasi
        molestias. Dicta temporibus ullam accusantium tempore, ratione vel quos!
        Iusto magni ipsa harum totam eos veritatis doloremque quam, beatae,
        nesciunt molestiae officia libero quas sed error perferendis. Vel,
        dignissimos enim quae ad rem laboriosam incidunt repudiandae itaque
        saepe nobis recusandae autem corrupti asperiores maiores aliquam amet
        odio. Eius excepturi sint commodi, autem vel nihil. Omnis sed assumenda
        tenetur deserunt eaque voluptatem porro mollitia maiores delectus,
        officia, est nam rerum fuga placeat eos dicta eveniet amet quo modi
        impedit, corporis laudantium laboriosam doloribus. Eius labore veritatis
        dolorem architecto, quam, tempora error aliquid sapiente nesciunt
        laudantium, nobis veniam aut earum mollitia recusandae quidem tenetur
        doloribus nulla dignissimos at? Nihil tempore quidem recusandae ea
        tenetur nesciunt quis pariatur eius consectetur, vel eligendi ipsum,
        sapiente quibusdam accusantium corrupti mollitia itaque odio. Minima
        culpa sunt molestias perferendis veritatis iure dolore veniam est, quia
        consectetur corporis odio error voluptatem, debitis doloribus
        dignissimos velit ex. Magnam praesentium quos, obcaecati quibusdam ex
        quaerat eligendi nulla voluptatum quo laboriosam, sit ipsam explicabo.
        Eius, adipisci vitae. Expedita error cumque, temporibus suscipit quas
        quam consectetur iusto amet odit, sit sequi rem doloremque maxime libero
        vero. Esse vel consequatur accusamus nostrum, sint iusto recusandae
        sequi quia repellat illo iste. Eos illo doloremque repellendus fugit sed
        voluptates, debitis, hic possimus saepe repellat itaque quisquam,
        corrupti assumenda blanditiis vero. Delectus dolorum qui et atque
        ratione quia nobis corrupti nostrum nam ab, molestiae at consequuntur
        ipsa accusantium numquam dolorem, odit dignissimos ducimus amet iusto
        voluptas ullam. Voluptates deleniti velit itaque molestiae sequi numquam
        quam porro? Impedit animi nobis voluptates reprehenderit in neque? Vel
        excepturi quis hic, blanditiis modi omnis aperiam dolorum a veniam porro
        explicabo ullam sapiente molestiae numquam ut rerum ipsa distinctio!
        Similique rem blanditiis non nesciunt quos unde saepe quas natus atque
        magni impedit voluptatum voluptas corrupti est, dicta accusamus
        voluptate necessitatibus porro dolor labore ab recusandae! Explicabo
        debitis quos soluta consequatur. Veniam, placeat earum dolorum itaque
        error fuga laudantium. Quod eaque rerum fugiat. Labore ducimus debitis
        voluptatum necessitatibus? Id qui voluptatum dolores assumenda minus
        consequuntur numquam fugit illum reiciendis repudiandae et
        reprehenderit, ab sit totam error eligendi, ea consequatur vel harum
        nesciunt? Unde commodi ullam odio, tenetur, minus fugiat voluptatem
        illo, maxime quisquam veniam culpa animi voluptates sequi. Natus maxime
        itaque laudantium necessitatibus neque qui facere sit tempora similique
        esse nesciunt, nemo, consequatur rem quae. Eos dolorem illum, possimus
        reiciendis veniam blanditiis. Amet est pariatur reiciendis, perspiciatis
        doloribus et odio distinctio at sapiente exercitationem illum id, in
        fugiat porro aliquid aperiam magni nisi, consequuntur quos
        necessitatibus possimus veritatis repudiandae placeat! Sed obcaecati
        quasi corrupti cumque possimus velit fuga necessitatibus adipisci,
        veritatis magnam doloremque tenetur cupiditate numquam consequatur earum
        culpa quo sint facere dolor quod architecto a et quos. Sapiente, quidem?
        Tempore dolorum quos dolorem molestiae, voluptates quasi alias dolor?
        Rerum ipsa accusantium earum officia doloribus, possimus tempora
        dignissimos, architecto vero quos similique quidem placeat eaque! Porro
        debitis atque eaque ipsam nihil deserunt, quaerat laudantium aliquam at
        unde eveniet exercitationem. Numquam, facilis adipisci. Adipisci
        incidunt cum amet harum iusto, ullam sed quos facilis inventore
        accusamus veniam dignissimos quod voluptate porro? Aspernatur quisquam
        pariatur error minus ex voluptas. Beatae praesentium suscipit assumenda
        porro aliquam accusantium similique ut aperiam repudiandae eveniet,
        molestias facere voluptatum maiores asperiores delectus ipsum blanditiis
        repellendus, dolores excepturi optio odio reprehenderit neque. Dolorum
        ipsum saepe voluptate debitis enim eius modi qui minus similique, non
        sunt earum molestiae nemo explicabo ea harum nobis labore possimus esse
        nihil et cum! Sapiente officiis id iusto at! Cum, modi facilis quo
        doloribus ipsam distinctio sapiente placeat repudiandae esse rerum
        sequi? Suscipit, tempora dolorum accusamus incidunt neque quisquam ipsam
        delectus, doloribus esse sit aut ea numquam, explicabo voluptates ipsum
        sed ex perspiciatis veniam itaque eveniet dicta eligendi? Iure possimus
        atque ut maxime mollitia odio, cupiditate voluptates eos corrupti! Et,
        facere officia, beatae tempora minima deserunt non possimus id eaque
        aspernatur quaerat laboriosam magnam! Asperiores nobis, fugit tenetur
        corporis aut hic unde quia adipisci a aspernatur voluptatem sint, minus
        doloribus impedit nesciunt perspiciatis nam! Repudiandae, numquam
        ratione! Accusantium nulla consectetur aliquam laudantium ut odio
        nostrum in nobis assumenda soluta, iusto quam saepe aliquid omnis dolore
        perferendis voluptas fugit voluptatum excepturi dignissimos esse
        exercitationem reiciendis? Suscipit consequuntur voluptatem maiores,
        labore ea doloribus asperiores eveniet illum cumque porro nulla aut
        dolores ab molestias totam earum quidem magnam aliquid culpa impedit et
        beatae. Odit repellat repellendus itaque harum excepturi quam beatae
        quos sunt natus. Quam, nisi. Est temporibus eos voluptate reprehenderit
        odit minus maxime quo labore quod tempora, eaque quos pariatur expedita
        tenetur modi quas vel doloribus quasi dolor, ipsa commodi obcaecati?
        Iusto quia debitis alias perspiciatis dolorem. Recusandae distinctio
        impedit eius numquam quo, esse, quia repellat deleniti ea possimus
        incidunt tempore quam odio inventore soluta eligendi voluptatem quos
        explicabo. Explicabo aliquam quaerat labore incidunt voluptates ab,
        omnis nam qui provident soluta nesciunt modi exercitationem earum nemo,
        debitis excepturi voluptatum quis doloribus eveniet ipsum illo
        consequuntur dolore pariatur! Laborum totam iusto, dolore quam, ipsa
        ratione aut error hic quisquam officiis provident tempora nemo! Nihil
        amet similique consectetur asperiores hic illo porro explicabo ab,
        soluta incidunt maxime odio reiciendis aliquam ipsum eligendi recusandae
        aliquid excepturi, laborum repudiandae et. Consequatur mollitia ducimus,
        modi dolore commodi quo laborum, itaque iste maxime minus esse incidunt
        veniam. A, quae modi aperiam officiis possimus necessitatibus itaque
        adipisci animi, quos, provident sint. Ad perspiciatis ipsa repudiandae
        repellendus dicta dolor sunt aut laudantium atque mollitia, non
        consequuntur tenetur tempore nihil, minima commodi rerum. Debitis
        quaerat quas, fugit blanditiis reprehenderit fugiat unde quis similique
        placeat laborum ratione et iste consectetur mollitia at quibusdam
        tempora numquam. Itaque rerum commodi quisquam, ullam, ex accusantium
        nostrum similique officiis fugit, magni maiores aut! Fugit ab quia
        dolorum accusamus laudantium quo quae rerum! Doloremque rerum et
        dignissimos! Quo ipsum, id, exercitationem in animi cum numquam error
        magnam eligendi sapiente nisi perferendis labore. Aliquam maiores
        corporis officiis et ullam provident consectetur exercitationem
        perspiciatis doloremque inventore, reprehenderit quaerat dolorum
        consequuntur repellendus tenetur temporibus. Nobis quasi eveniet natus
        delectus, facere voluptas. Veritatis aspernatur aliquid suscipit
        similique earum eius, corrupti commodi hic fugiat voluptate pariatur
        praesentium id perspiciatis consectetur, enim nostrum perferendis saepe
        magnam dicta maxime. Quidem itaque odio porro minima aperiam eligendi
        voluptatum, maxime officiis ratione ullam sit, doloribus vel, ipsam
        illum! A id esse voluptates minus optio nostrum ab impedit! Perspiciatis
        at exercitationem, dolor laboriosam consequuntur nostrum obcaecati
        doloremque, facilis nesciunt illum eum sunt natus aliquam ipsa harum
        nisi dolores. Sunt possimus voluptates ratione cum qui, iusto sint
        assumenda fugiat magnam vel ex aliquam itaque eius alias voluptatum
        aperiam perspiciatis est quam eligendi veniam! Dolores tenetur nulla
        corrupti fugit neque est ipsum eum, culpa voluptates ad quam iusto
        praesentium placeat beatae sequi. Quisquam assumenda reprehenderit
        perferendis a voluptatibus architecto quaerat consequatur eveniet.
        Blanditiis dolor placeat id nesciunt obcaecati facilis autem temporibus.
        Nulla repellendus corporis mollitia dolores rem itaque necessitatibus
        quia asperiores ipsum a! Harum quisquam in provident perferendis
        necessitatibus autem. Quae rerum excepturi dolore, id necessitatibus eum
        molestias recusandae libero distinctio at dolor? Illo porro sapiente
        suscipit assumenda ipsum, accusamus inventore expedita enim debitis
        adipisci ullam! Sint aut facilis quas pariatur possimus enim, deleniti
        accusamus minus saepe iusto ab tempora mollitia! Illo eveniet debitis
        voluptates facilis, dicta quas perferendis quos dolores eos temporibus
        quis soluta veritatis? Officiis, dolore esse nam est, fuga perferendis
        quae laudantium quos vitae assumenda voluptatibus, suscipit reiciendis
        omnis ex repellendus dolorem nisi amet commodi debitis quibusdam ea
        itaque? Nostrum hic ab quia consequatur praesentium necessitatibus
        cupiditate, ducimus quae, aliquid eius ipsum officiis esse perferendis
        molestias vitae! Quas aliquam veniam quae dolorum autem reprehenderit
        ipsum dolores saepe nesciunt quisquam, animi sint, ducimus minima velit
        eligendi dolorem sed beatae dignissimos ut libero voluptas tempora.
        Sapiente, veniam reprehenderit? Tenetur ipsam labore quas delectus eos,
        ratione consectetur aut iste illum, saepe quae deleniti molestias ad
        adipisci ut veritatis pariatur reiciendis sapiente? Aliquid quam cumque
        inventore commodi nesciunt maiores nulla non sed optio. Totam laudantium
        reprehenderit beatae fugiat suscipit, inventore, nihil doloremque
        adipisci quae recusandae voluptas minus earum quaerat autem quidem sint!
        Nobis repellendus nulla corrupti? Sint enim incidunt dolore doloribus
        accusamus adipisci aspernatur rem libero, maiores animi commodi iste
        dignissimos quas molestiae, harum id! Qui nostrum sequi, sit ut soluta
        nesciunt harum eos, blanditiis adipisci, voluptas iure quia. Ratione
        autem blanditiis ducimus fugit, perferendis alias nobis maiores omnis
        at, facilis deserunt aut molestias. Soluta iusto tempora facilis a
        sapiente molestias. Consequuntur voluptatibus, esse molestiae laudantium
        dolor nam eius consequatur quos qui, porro excepturi numquam veritatis
        facere corrupti soluta fuga? Facilis iste sapiente modi, voluptas
        repellendus quam ducimus impedit tempora itaque repudiandae enim
        perspiciatis voluptatem doloribus molestias esse vero temporibus beatae.
        A eveniet deleniti nam, hic, mollitia enim consequatur id doloremque sed
        illum amet natus. In aspernatur, vitae doloribus iste molestiae quasi
        necessitatibus cumque, sint voluptate consequuntur praesentium non ex,
        quia itaque cupiditate quod! Quod fugit laboriosam maxime dolorum vero
        asperiores reprehenderit fuga blanditiis architecto earum eaque facilis,
        distinctio nihil, placeat ad quis suscipit doloribus qui vitae quidem
        ipsum nam quas sequi iure? Delectus dolor reprehenderit accusantium quam
        ipsa, labore dolorum praesentium aliquam porro maiores quo error modi
        sapiente recusandae, atque libero unde tempora? Illo nisi deserunt
        cupiditate reprehenderit amet, autem fuga. Consequatur in quis, id
        numquam vel exercitationem aut minima eius quos eos nobis, autem tempore
        qui consequuntur voluptate sunt velit. Nisi dolorum debitis unde atque
        cumque vitae, quasi eligendi itaque impedit doloremque totam odit, magni
        aspernatur ab asperiores enim veniam, nam rem officia incidunt laborum.
        Accusamus obcaecati ipsa magni optio exercitationem consectetur, quasi
        debitis voluptas accusantium facere nisi nulla laborum eum similique
        aperiam quos quaerat consequatur, amet nemo doloremque adipisci? Culpa
        labore ut sequi architecto! Non velit maiores saepe at? Vitae excepturi
        quas modi asperiores delectus error dicta alias assumenda ullam quis!
        Ipsam, cumque ratione, minima est nisi similique neque incidunt beatae
        animi doloribus repellat sit totam assumenda. Odit laboriosam modi
        officiis, eius pariatur vero iure cumque quia consequuntur repellat,
        aspernatur nemo incidunt! Labore officiis, quos modi maxime deleniti
        accusantium ipsam explicabo. Consequuntur impedit nobis sit recusandae
        architecto voluptas eius iure esse, explicabo officia inventore culpa
        quis, modi distinctio itaque commodi qui quia reprehenderit cupiditate
        pariatur neque id. Veritatis, incidunt ea! Harum voluptates, sapiente
        voluptatum doloremque pariatur atque repellat ipsum quos recusandae ab
        qui omnis quaerat amet similique commodi ea itaque officia ipsam
        aspernatur distinctio ad sunt! Tempora odit, incidunt ad quam modi,
        doloremque necessitatibus totam dolores voluptatibus fugiat laboriosam
        sint ipsum repellat iste voluptates ea. Fugiat debitis est a ullam nobis
        quod voluptatem nisi ea ab blanditiis? Veritatis reiciendis placeat
        soluta deserunt nulla, aut quos vel accusantium nostrum dolores iste
        harum et quam autem esse molestias, hic modi explicabo eveniet
        distinctio neque quo quae repudiandae. Fugiat officia tempora qui earum
        molestias veniam omnis sit architecto ipsa molestiae ex magni, pariatur
        vel repellendus, iusto necessitatibus voluptatem enim. Nemo nostrum
        facilis officia officiis veritatis optio, adipisci tempora excepturi
        laborum eveniet error pariatur, vel odio consequatur ipsam eum! Ipsam,
        tempore maxime. Error sit possimus atque rem culpa eveniet recusandae
        ipsa nobis ea soluta quam dicta, voluptate, numquam suscipit amet est
        magnam.
      </div>
    </div>
  );
};
