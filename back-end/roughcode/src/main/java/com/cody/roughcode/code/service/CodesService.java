package com.cody.roughcode.code.service;

import com.cody.roughcode.code.dto.req.CodeReq;
import com.cody.roughcode.code.dto.res.CodeDetailRes;
import com.cody.roughcode.code.dto.res.CodeInfoRes;
import com.cody.roughcode.code.dto.res.CodeTagsRes;
import org.springframework.data.domain.PageRequest;

import java.util.List;

public interface CodesService {

    List<CodeInfoRes> getCodeList(String sort, PageRequest pageRequest, String keyword, String tagIdList, Long userId);

    Long insertCode(CodeReq req, Long userId);

    CodeDetailRes getCode(Long codeId, Long userId);

    int updateCode(CodeReq req, Long codeId, Long userId);

    int deleteCode(Long codeId, Long userId);

    int likeCode(Long codeId, Long userId);

    int favoriteCode(Long codeId, String content, Long userId);

    List<CodeTagsRes> searchTags(String keyword);
}
