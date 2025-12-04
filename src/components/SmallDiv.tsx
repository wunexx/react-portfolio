export default function SmallDiv({h2, h3}: {h2: string, h3: string})
{
    return (
    <>
        <div className="small-div">
              <h2>{h2}</h2>
              <h4>{h3}</h4>
        </div>
    </>
    )
}