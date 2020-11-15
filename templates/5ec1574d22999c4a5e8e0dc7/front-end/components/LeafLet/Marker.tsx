import React, { FunctionComponent } from 'react'
import { Marker as Mrk, Popup } from 'react-leaflet'
import L from 'leaflet'

export interface leaftLetType {
  position: number[],
  children?: React.ReactChild
}

const Marker: FunctionComponent<leaftLetType> = (props) => {
  const [state, setState] = React.useState({
    position: [51.505, -0.09],
  })

  const markerIcon = new L.Icon({
    iconUrl: 'data:image/png;base64,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',
    iconRetinaUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABmCAYAAABydzePAAAARGVYSWZNTQAqAAAACAACARIAAwAAAAEABgAAh2kABAAAAAEAAAAmAAAAAAACoAIABAAAAAEAAABEoAMABAAAAAEAAABmAAAAAKvC644AAAv9SURBVHic3V1rdBRFFr7Tj0nIZCYJYngkkLCQBBAF9Si+N0YwGkwMhiAhvBV5E0Vx1XXV4+q6Hj2uqLsr66pwVt6L4QiouCq46KLiHsNjUd4hk4QEQpjMZEgy3TO9544EM49MV3VXz4DfL+h03fvVza261fdWVUyKokBUcfAHC9TWXAon6tKh+XRfxdWSampx9UEKSpK1wWRLboSUng3QN90O/QecgqwhZ6NJTzBU+qlGHnbtzIK9u2/27ttd4jt6NF+LGH5Q1hbu8isqYfiIHTDqhsPQs5ePPdmfYIyHfP1lb2XT+7PlHdufBK9PZCqbF9rFW/OegqJ73oGrrzvNVDZTgzgdHGzZOEquXPeKUld/HRuhkcFlZGzn77n3YSi4+3tIsDDpiH6DtLWZ4O0/l0ir31vPgpAmxMU7xMlTJ8LMeVv1itJnkB2fp8mvvrhJaWi8Ui8RFuD6Z3zBP/50MYy4yqFVnGaDKH94cr68ZfMbBvZPM8QpM+6GORUfaGlPb5A6u+h7fHGl98ihsQb2STf4K69exv3+pXmQ0pMqItEZ5OB+i7xw1mGl1d0nyv3TBFOf3t8Lr/19FKT1l0jbc8SK/vttT2nuDPvFYgwEzm3y7Kn74djheNI2ZB7y1fa+0qMP1uvkFzOYEi0Nwmt/Gww5l7n1G+S7nZdIixfWglcmtvIFaRSbrVb4yztZMHBwe8T3Ihpk326bNHtaiwH8YgJTUnK18PbKbOib1u2c0r1B3C6Tt7ykynfq5BWsyEuKD856ZHDLEkiyD9xeOex7Fl4AUeDAIoiQYBZANJFPdWrghg9fxS97r7y717o1iPLEQ8/IX2x7mgWJlg4POCUPuDzEk30ArGYRbKIZkuLMLOiAOHt+HkydtS3cz8Ib5PNPMqTfPVqtV7HL44HGs23g8bH5ODVzHPRO6AFWs37DiCvWJsDgnLbg56G+6G41ya+88KkeZT6fF+ytrWBvdTMzBgJloUyUjTp0cXz5uWXhnoca5K3XJylnzgzWqqhD9sLBFpfm4UEClI06UJdWePfunQKb3x8W3DxwyNTWmKV7izq0KnF4PFDfqhrqmaJfogWSNQ4hrmevA/ymT4cEPAt4Y9XyKVrJxsIYCNSJurXA19yUAxvXBUTRnz2kuYmTiu9wa1mAoesecToZdVEbBtlsECfw1G393zsbtl7V+f+fc6ob1uZrMQZObsdcLmoicRkDjiePvmOjkGh1xA8ZVoXP2n/cP1JudSU7Pv24uON4TQaNPOSQnWQFjqMzij+Xs+PzNLg5rw66eohclHdAOd2cTSUNwD/j00ygvUrLVqTOWfCM2C89YliX6mszT775xjNN61dPI5WN65X+iYnEXDoh5OY9bXr+lWfhvEG++TJVWrygkVaQW5LguKuV6N2E4Vfszlz612I1QwQDDVNdMXfj2X17RpC8n2FNBItImdfmTLK4ZVsc2JJ9P02qO7YX0En4CSfcZCUT9Iqs9ZtG0hoDgW2wLcpgySkAPkWAL7/Igs4oI3/7n9m0MnAVSrLowo6kPfvH6fQsA4EySIyCnNBzaaFU7RoN/iFTXytK48dSx60aVyu0qijGYYK/XWp2EXCotLBKbfgkiiIMsNLNJdylqXv4jZ+M4GD/3jRaUhhZ1IyBwDmDVjYLmciNdmnv/6pvPCFwYK8eREvKSbBkRvfWMmeoAWWSDB0SjiE4Xp3CQW3NcNp27g517+hVPu1VekZkIJFNwjEEtdXpnNduv4a2HSZ6IgEXXXE5Q6u0dJYEKBt16OEYFrX2bA5cTuo55KwcPtPVCVyB0rOhg5oONY7hoDQ1ZXKKLDFPHuNynLXMaOhQmk8P5EweOYG1YM5mM9wgRuhQmptyOEXgNec/fnHwKTzHWa0nWPfL53QmG20rQ3RYrXUcJNqoK3K8Yor48476+kw9vEigpkONYzhwNlsdZ7Jaqb9y48TIOYfWb3f+mpoNJdR0qHEMB5PV1siZbEkNtA3VCkftx6szOw78wPQbpitQNuqI9I6W7BmkpNRykJG5m7adLU4939C0csWD9IzIQCI7UdCwwXJQ9m4OsoccpG1nIbA+ZrqM8JK2777JJcmikXAMQc6wag6GDG+mbYd5y0SCrJT9qUff9bnYRQOUVffSc39Sew+50eZWQRDacJMwB5ZEhUtL30lL7pL4ONV33Hv2jGx4+XnVDpACZaFMFtyCwQ8d+k/ozJjxo65/k1YA5i0TCMbpqXVrptsXz6vU4ynYFmWgLLV3kRN1ThUNcVPuW3C+UJU7ZrMWopf2IPsMav5oS/HR+8u34fin1YFtsC3KYMkpBHn5X0NAGWJs7mHF4aBOFpGkEgMIT5i4/JJJ05eqpQdwQj69ankFiVd0Ikk0Q5rVQsylE9ywy9bwb60sg4DK3dIXy6R1q1fRCsNU3RGnCyQf3fZOITnFkXJ7/sa4oKxaR31t5plPthbLjjNUQ0zkTDDIRl+o8reteORamDB5FwQYpOaYWSobh/uvqNe8WMqsbnGB1xTloybngMv0zCSrtlKmxdIoVG7ti8EFAordAwZ6xDH5v9FCCIn0szLPIhAj3WbRtjJFTy2fVtZpDAjZDnHscLw0eXzIrhpSYD2k1umOmqegZ6AxtEQV6Nyu+f7H/cBiPU848KNk4OB28fY7H9ZKEImh6+J4NhqoA3VpNQZCmDRtUldjQNg9ZicbBKn0LifIcg+tinCiPeFuhxZJ274NNWA06WuJ1zSBdoLrP2AHv+aDW0Keh7yZ2kcWH5g/Rg9hJIrhDwvPJIs3UqAslImy9RgDwS95YlxY7mHfLp/xFZ+VvUlvB/xDyGb1dwJ/q1qBbVEGytIzRDoh3Hb7Y90dT+t+4+7eKps0ZzrTXcw4lNyyF1pl2R+qOyRvyASMEyUmdzBq4Cc8frXq9YYACEKbuP5DK6Smhi3tde/Pl490CreNeVz+7F8vsOKCHbOaeSb7TLVCnDyjpDtjgOpe95Mneam0wKVngr2QEG7XYTAi5wJTU71+i/5CwM9bVKTWE/Vd9bPmf4SWvdhNwg8dthbuLFLNDhIdM+AXVBQyYRVDcEt+ex+JdrJzF/mFh/wWvkjhX30TnKYCqkOIB/5nkWaWk205vJBgNrvEtZtTIkWWriA/mZNzmVsYe9eCi80e4tSZEcNsMOiOqeL275ICB3g8Vv1UjQdJmA0G3dmtnr184swH7rpQDRAMftFi6sPW9IfZptz/b1Nqb+pqX7ThDwJjCo7QqtV0uk+oeOSCD8OkYTaknSZtuWPs/Igr39XUNgoQCwoXkYbZYGi/LuPooXhpSulZLUlpQ4FhdsOHyVqv5dF+IPZXWe3iuPEzY9HnSBBnzLpbzx1F+i5UcTo4uXRs3YVyQQJO9kLlVl07DvQdmbYl+4T75qp+QUYLwsLFuvfW6z9DPmHyLi4z87Mo9jss/JN8Xr7uvfVMDtXzCx/u9ix9tMA98sQ8FqrY3DJw3c2Nwg03vshElgaIhcVzcZJnIYvdPWZ4EGlikZv5RW5qSOjRJK7d1JvV7Xfs7qHoly6JEyZNYiaPEOL0WeNYXgXI9uo/t8sklxYeVVochm/cBUZhNhjsPARhsSrCnIVR+84RKpYw18XWIIiikn0sqn5q8IfZ3NF21nKNuS3TgKpfEBTxH+sTWEWWrmDvIfBz1c8Q2TiRFpfMMsIYYJiHgIFVPwyzGz7qjZ8NTOWegzEeAsZV/cSZcwqNMgYY6iHn4C0c/aP/4hIGMKX1+1pY9+H1RvI1zkPOgWXVT1i0xPA6s+EGYVX1E6659nW46VbD72OMzjXm+qt+iri6Mh63jjJkFRbGewjor/qJJROmR8MYEDUPAe1VP/9e0vVb0oyMLF0RHQ8B7VU/f4oySsaAqHrIOcjj8quUk41E9wlFI8wGI3oecg40VT/hocfC7iU1ElE3CGnVzx9mr7+F+gitXkT/r4cAQdWP5yTxvQ2J0YosXRF9DwH1qp84fuKUWBgDYuYh0H3VL9yRjWgiNh4C3Vf9hNkLCmJlDIipQSC06uf/9z1l38eSUmwNElT14yuWlMWWjdF/kokEXat+1954KtZ0YjepdkXNMTPgFRz9M2ISWc4DAP4PHV3Okcm56kEAAAAASUVORK5CYII=',
    shadowUrl: 'data:image/png;base64,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',
    iconAnchor: [12.5,25],
    popupAnchor: [0,-25],
    shadowSize: [25,12],
    shadowAnchor: [12.5,9],
    iconSize: [25,25]
  })

  React.useEffect(() => {
    setState({ ...state, position: props.position })
  },[props.position])
  
  
  return (<Mrk position={state.position} icon={markerIcon}><Popup>
    {props.children}
  </Popup>
</Mrk>)
}

export default Marker