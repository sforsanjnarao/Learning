 

export function PostComponent({name, subtitle, time, image, description}) {
  return  (
    <div>
        <div>{name}</div>
        <div>{subtitle}</div>
        {(time !==undefined) ? 
        <div>
            {time}
            <div>
                <img src={image} alt="Post Image" />
            </div>
        </div>:null}
        <div>{description}</div>
    </div>

  )
}

